let highestZ = 1;

class Paper { // Use uppercase for class names

    holdingPaper = false; // Use proper capitalization and semicolons

    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0; // Use proper capitalization
    currentPaperY = 0; // Use proper capitalization

    init(paper) {

        paper.addEventListener("mousedown", (e) => { // Corrected syntax
                
            this.holdingPaper = true;

            paper.style.zIndex = highestZ;
            highestZ += 1;

            if (e.button === 0) {
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }
        });

        document.addEventListener('mousemove', (e) => { // Corrected syntax

            this.mouseX = e.clientX;
            this.mouseY = e.clientY; // Corrected assignment operator

            this.velocityX = this.mouseX - this.prevMouseX; // Corrected assignment operator
            this.velocityY = this.mouseY - this.prevMouseY; // Corrected assignment operator

            if (this.holdingPaper) {

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`; // Use backticks for template literals

            }
        });

        window.addEventListener('mouseup', (e) => { // Corrected syntax
            console.log('mouse button is released');
            this.holdingPaper = false;
        });
    }
}

const papers = Array.from(document.querySelectorAll('.paper')); // Corrected spelling

papers.forEach(paper => {
    const p = new Paper(); // Use the class name with uppercase
    p.init(paper);
});
