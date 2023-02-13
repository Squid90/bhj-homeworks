const progress = document.getElementById( 'progress' );
const send = document.getElementById( 'send' );

send.addEventListener('click', () => {
    
    const file = document.getElementById('file').files[0];
    upload(file);
    function upload(file) {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function(event) {
            progress.value = ((100 * event.loaded) / event.total) / 100
        }
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(file);
        
    };
    event.preventDefault()
});
