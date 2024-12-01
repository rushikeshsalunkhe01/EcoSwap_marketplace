const slide = document.getElementById('cover-img');
        const img = ["./../../img/vehiclecheckoutimg/vehicle1.jfif",
                    "./../../img/vehiclecheckoutimg/v2.jfif",
                    "./../../img/vehiclecheckoutimg/v3.jfif",
                    "./../../img/vehiclecheckoutimg/v4.jfif",
                    "./../../img/vehiclecheckoutimg/v5.jfif",
                "./../../img/vehiclecheckoutimg/v6.jfif",];
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