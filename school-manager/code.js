const changeTab = (event) => {
    document.getElementById("teacher_tab").style.backgroundColor = "#B2DFDB";
    document.getElementById("student_tab").style.backgroundColor = "#B2DFDB";
    document.getElementById("administrator_tab").style.backgroundColor = "#B2DFDB";
    event.target.style.backgroundColor = "#80CBC4";
    if (event.target.id == "teacher_tab") {
        document.getElementById("teacher_list").style.display = "block";
        document.getElementById("student_list").style.display = "none";
        document.getElementById("administrator_list").style.display = "none";
    } else if (event.target.id == "student_tab") {
        document.getElementById("teacher_list").style.display = "none";
        document.getElementById("student_list").style.display = "block";
        document.getElementById("administrator_list").style.display = "none";
    } else {
        document.getElementById("teacher_list").style.display = "none";
        document.getElementById("student_list").style.display = "none";
        document.getElementById("administrator_list").style.display = "block";
    }
};

const add = (table_name) => {
    const formData = getFormData(table_name + "_form");
    const tbody = document.getElementById(table_name + "_table_tbody");
    const row = document.createElement("tr");

    for (dataValue of formData) {
        const td = document.createElement("td");
        td.textContent = dataValue;
        row.appendChild(td);
    }

    tbody.appendChild(row);
};

const getFormData = (formId) => {
    const form = document.getElementById(formId);
    const data = [];
    const inputs = form.getElementsByTagName("input");

    for (input of inputs) {
        data.push(input.value);
    }

    return data;
};