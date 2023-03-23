const form = document.querySelector('#image-upload-form');
const fileInput = document.querySelector('#image-file');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Image uploaded successfully!');
    } else {
      console.error('Failed to upload image.');
    }
  } catch (err) {
    console.error(err);
  }
});
