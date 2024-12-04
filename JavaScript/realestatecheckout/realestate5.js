const slide = document.getElementById('cover-img');
        const img = ["/img/realestatecheckout/lands/land1.jpg",
                    "/img/realestatecheckout/lands/land2.jpg",
                    "/img/realestatecheckout/lands/land3.jpg"];
        let index = 0;

        function next() {
            if (index < img.length - 1) {
                index++;
            } else {
                index = 0;
            }
            slide.src = img[index];
        }

        function back() {
            if (index > 0) {
                index--;
            } else {
                index = img.length - 1;
            }
            slide.src = img[index];
        }
        setInterval(next, 5000);



       function openModel(type) {
        const overlayEle = document.getElementById('overlay');
        const messageModel = document.getElementById('message-model');
        
        overlayEle.style.display = "flex";
        
        if (type === 'message') {
            messageModel.style.display = "block";
        }
    }

    function closeModel() {
        const overlayEle = document.getElementById('overlay');
        overlayEle.style.display = "none";
    }

    function alertMessage(){
        alert("Message send Successfully !!");
    }