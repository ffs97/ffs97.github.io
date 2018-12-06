skills = [
    {
        title: "Programming Languages",
        skills: [
            ["Python", 5],
            ["C/C++", 3],
            ["R", 2],
            ["Octave", 3],
            ["Java", 1],
        ]
    },
    {
        title: "Scripts",
        skills: [
            ["Bash", 5],
            ["VBScript", 3]
        ]
    },
    {
        title: "Assembly Languages",
        skills: [
            ["MIPS", 4],
            ["Verilog", 2]
        ]
    },
    {
        title: "Web Development",
        skills: [
            ["PHP", 3],
            ["Javascript", 4],
            ["MySQL", 4],
            ["CSS/HTML", 4],
            ["Node.js", 3]
        ]
    },
    {
        title: "Miscellaneous",
        skills: [
            ["LaTeX", 4],
            ["Git", 4],
            ["Photoshop", 2]
        ]
    }
]

$(document).ready(function () {
    $("span.link").on("click", function () {
        var goto = $(this).data("goto");

        var elem = $("#" + goto);
        $(document).scrollTop(elem.offset().top - 80);
    });

    var skills_block = document.querySelector("#skills");

    for (var index in skills) {
        var skills_group = skills[index];
        var html = `<div class="skill-title">` + skills_group.title + `</div>`

        for (var skill_index in skills_group.skills) {
            var skill = skills_group.skills[skill_index]

            html += `<div class="skill">
                ` + skill[0] + `
                <div class="skill-rate rate-` + skill[1] + `">
                    <div></div>
                    </div>
                </div>
            `
        }

        skills_block.innerHTML += `<div class="skill-group">` + html + `</div>`
    }
});