/*Question 45: Cars: Create detailed car objects with flexible properties*/

// interface myCar {
//     model:string,
//     manufacturer:string,
//     make_year:number,
//     color:string,
    
// }
// function Car (model:myCar, manufacturer:myCar, make_year:myCar, color:myCar) {
//     let car= {
//         model:model,
//         manufacturer:manufacturer,
//         make_year:make_year,
//         color:color
//     }
//     return `${car.model} ${car.manufacturer} ${car.make_year}${car.color}`

//     }
//     const myhonda:myCar = {
//         model:"Civic",
//         manufacturer:"Honda",
//         make_year:2020,
//         color:"Red"
//     }
    
//     console.log(Car(myhonda, myhonda, myhonda, myhonda));

    
    

    interface myCar {
        model: string;
        manufacturer: string;
        make_year: number;
        color: string;
    }
    
    function Car(model: myCar, manufacturer: myCar, make_year: myCar, color: myCar) {
        let car = {
            model: model.model,
            manufacturer: manufacturer.manufacturer,
            make_year: make_year.make_year,
            color: color.color,
        };
        return ` ${car.model} ${car.manufacturer} ${car.make_year} ${car.color}`;
    }
    
    const myAudi: myCar = {
        model: "Audi",
        manufacturer: "Audi",
        make_year: 2020,
        color: "Black"
    };
    const myBMW: myCar = {
        model: "BMW",
        manufacturer: "BMW",
        make_year: 2020,
        color: "Red"
    };

    console.log(Car(myAudi, myAudi, myAudi, myAudi));
    console.log(Car(myBMW,myBMW,myBMW,myBMW));