document.addEventListener('DOMContentLoaded', function() {
    let cells = document.querySelectorAll('.cell');
    let redIndex = Math.floor(Math.random() * cells.length); // Random red cell
    let message=document.querySelector(".message");
    let button=document.querySelector(".btn");
    let score=document.querySelector(".score");
    let point=0;

    cells.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            if (index === redIndex) {
                cell.style.backgroundColor = 'red';
                cells.forEach(c => c.style.pointerEvents = 'none');
                message.innerHTML="You Lost, Try Again";
                button.style.display="inline";
                message.style.color="red";
                message.style.fontWeight="bold";
            } else {
                cell.style.backgroundColor = 'green';
                cell.style.pointerEvents = 'none';
                point++;
                score.innerHTML="Your Score: "+point;
                if(point===15){
                    message.innerHTML="Congratulations, You Won!";
                    button.style.display="inline";
                    message.style.color="#7CFC00";
                    message.style.fontWeight="bold";
                }
            }
        });
    });
});