document.addEventListener('DOMContentLoaded', function () {

    const linkedinButton = document.getElementById('linkedinButton');
    linkedinButton.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/wang-ng-8805b2213/', '_blank');
    });

    const githubButton = document.getElementById('githubButton');
    githubButton.addEventListener('click', function () {
        window.open('https://github.com/v7ncentng', '_blank');
    });
});