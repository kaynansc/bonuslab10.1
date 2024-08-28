// Initial contacts data
let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

const processContacts = (callback) => {
  let output = "";
  contacts.forEach((contact, index) => {
    output += callback(contact, index);
  });
  document.getElementById("contactList").innerHTML = output;
};

const displayContact = (contact, index) => {
  return `<p>${index + 1}. ${contact.name}, ${contact.phone}, ${contact.email}</p>`;
};

const addContact = () => {
  const name = prompt("Enter contact name:");
  const phone = prompt("Enter contact phone:");
  const email = prompt("Enter contact email:");

  if (name && phone && email) {
    contacts.push({ name, phone, email });
    setTimeout(() => {
      processContacts(displayContact);
      alert("Contact added successfully!");
    }, 1000);
  } else {
    alert("Invalid input. Contact not added.");
  }
};

const findContactRecursive = (name, index = 0) => {
  if (index >= contacts.length) {
    return null;
  }
  if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
    return contacts[index];
  }
  return findContactRecursive(name, index + 1);
};

const findContact = () => {
  const name = prompt("Enter the name of the contact to find:");
  if (name) {
    const contact = findContactRecursive(name);
    if (contact) {
      alert(`Contact found:\nName: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
    } else {
      alert("Contact not found.");
    }
  }
};

const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

document.getElementById("addContact").addEventListener("click", addContact);
document.getElementById("findContact").addEventListener("click", findContact);

processContacts(displayContact);

setInterval(() => {
  console.log(`Number of contacts: ${contacts.length}`);
}, 5000);

setInterval(changeBackgroundColor, 1000);

const interactWithList = () => {
  do {
    const action = prompt("Enter 'add' to add a contact, 'find' to find a contact, 'view' to view the contacts, or 'quit' to exit:");
    switch (action.toLowerCase()) {
      case 'add':
        addContact();
        break;
      case 'find':
        findContact();
        break;
      case 'quit':
        return;
      case 'view':
        return;
      default:
        alert("Invalid action. Please try again.");
    }
  } while (true);
};

interactWithList();