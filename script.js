let form = document.getElementById("dataForm");
    let table = document.getElementById("dataTable");
    let count = 0;

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let firstNameInput = document.getElementById("firstName").value;
        let lastNameInput = document.getElementById("lastName").value;
        let dobInput = document.getElementById("dob").value;
        let genderInput = document.getElementById("gender").value;
        let fatherNameInput = document.getElementById("fatherName").value;
        let motherNameInput = document.getElementById("motherName").value;
        let contactInput = document.getElementById("contact").value;
        let addressInput = document.getElementById("address").value;
        let sectionInput = document.getElementById("section").value;
        let rollNoInput = document.getElementById("rollNo").value;

        if(firstNameInput && lastNameInput && dobInput && genderInput && fatherNameInput && motherNameInput && contactInput && addressInput && sectionInput && rollNoInput){
            count++;

            let newRow = document.createElement('tr');
            newRow.classList.add('border-t');
            newRow.innerHTML = `

            <td class="px-4 py-2 text-center">${count}</td>
            <td class="px-4 py-2 text-center">${firstNameInput}</td>
            <td class="px-4 py-2 text-center">${lastNameInput}</td>
            <td class="px-4 py-2 text-center">${dobInput}</td>
            <td class="px-4 py-2 text-center">${genderInput}</td>
            <td class="px-4 py-2 text-center">${fatherNameInput}</td>
            <td class="px-4 py-2 text-center">${motherNameInput}</td>
            <td class="px-4 py-2 text-center">${contactInput}</td>
            <td class="px-4 py-2 text-center">${addressInput}</td>
            <td class="px-4 py-2 text-center">${sectionInput}</td>
            <td class="px-4 py-2 text-center">${rollNoInput}</td>
            
    `;

    table.appendChild(newRow);

        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("dob").value = '';
        document.getElementById("gender").value ='';
        document.getElementById("fatherName").value ='';
        document.getElementById("motherName").value ='';
        document.getElementById("contact").value ='';
        document.getElementById("address").value ='';
        document.getElementById("section").value ='';
        document.getElementById("rollNo").value ='';
        }
    });