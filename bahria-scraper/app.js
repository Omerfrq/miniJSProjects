const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getTeachers = (campus, department) => {
    const url = `https://bahria.edu.pk/${campus}/${department}/faculty/`;
    return fetch(url)
        .then(res => res.text())
        .then(body => {
            const $ = cheerio.load(body);
            const Profiles = [];
            $('.table tr').each(function(i, element) {
                const $element = $(element);
                const $name = $element.find('td:nth-child(2)').text();
                const $Designation = $element.find('td:nth-child(3)').text();
                const $ProfileLink = $element
                    .find('td:nth-child(2) a')
                    .attr('href');

                const Profile = {
                    Name: $name,
                    Designation: $Designation,
                    Profile: $ProfileLink
                };
                Profiles.push(Profile);
            });
            return Profiles;
        });
};

module.exports = {
    getTeachers
};
