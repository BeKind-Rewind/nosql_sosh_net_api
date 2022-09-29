const $userForm = document.querySelector('#user-form');


const handleUserSubmit = event => {
  event.preventDefault();

  const userName = $userForm.querySelector('#user-name').value;

  if (!userName) {
    return;
  }

  const formData = { userName };

  fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
      // DO INDEXED DB STUFF HERE
    });
};

$userForm.addEventListener('submit', handleUserSubmit);
