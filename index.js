
    function areaAndVolumeOFCylinder(){
        const cylinder = {
            height: prompt("Height of cylinder","0"),
            radius: prompt("Radius of cylinder","0"),
            volumeOfCylinder: function(){
                let c = 3;
                return 3.141 * Math.pow(this.radius, 2) * this.height;
            },
            areaOfCylinder: function (){
                return 2 * (3.141) * this.radius * this.height;
            }
        };
        var volumeOfCylinder = cylinder.volumeOfCylinder();   // assign a any function to a variable then variable makes a function
        console.log("The volume of cylinder is: "+volumeOfCylinder);  // call function variable
        alert("The volume of cylinder is: "+volumeOfCylinder);
        
        var areaOfCylinder = cylinder.areaOfCylinder();
        console.log("The area of cylinder is: "+areaOfCylinder);
        alert("The area of cylinder is: "+areaOfCylinder);
    }

    document.querySelector("#runBtn1").addEventListener("click", function(){
        areaAndVolumeOFCylinder();
    });


    function calculatePower(){
        let inputVoltage = prompt("Input voltage value","0");
        let inputCurrent = prompt("Input current value","0");
        
        let outputPower = inputVoltage * inputCurrent;

        alert("The output power is: "+outputPower);
        return outputPower;
    }

    document.querySelector("#runBtn2").addEventListener("click", function(){
        let powerVal = calculatePower;
        console.log("The output power is: "+powerVal());
    });

    const wallPrint = (n, w, h) => {
        let = canPaintWallArea = n;
        let totalAreaOfWall = w * h;
        let canWallPrintNum = canPaintWallArea / totalAreaOfWall;
        return parseInt(canWallPrintNum);
    }

    document.querySelector("#runBtn3").addEventListener("click", function(){
        let n = prompt("n value","0");
        let w = prompt("w value","0");
        let h = prompt("h value","0");

        let numOfWallPrint = wallPrint(n, w, h);
        console.log("Remain Paint wall area is: "+numOfWallPrint);
        alert("Remain Paint wall area is: "+numOfWallPrint);
    });
