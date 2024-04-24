// //eg:1 Square

// function Squre(n){
//     for(let i=0;i<n;i++){
//       let str = "";
//       for(let j=0;j<n;j++){
//         str += "* ";
//       }
//       console.log(str);
//     }
//   }
//   console.log(Squre(10));
  
// //   Hollow squre
//   function Squre(n, m) {
//     for (let i = 0; i < n; i++) {
//       let str = "";
//       for (let j = 0; j < m; j++) {
//         if (i === 0 || i === n - 1 || j == 0 || j == m - 1) {
//           str += "*";
//         } else str += " ";
//       }
//       console.log(str);
//     }
//   }
//   console.log(Squre(15, 15));
  

// //eg:2 Left Triangle


// function LeftTriangle(n){
//     let str = ""
//     for(let i=1;i<=n;i++){
//       for(let k=1;k<=i;k++){
//         str += "A";
//       }
//       if(i%2){
        
//       console.log(str);
//       }
//       str = "";
//     }
//   }
  
//   console.log(LeftTriangle(5));
  


// // Eg:3

// function TriangleWithOne(n){
//     for(let i=0;i<n;i++){
//       let str = "";
//       for(let j=0;j<n-i;j++){
//         str += " ";
//       }
//       for(let k=0;k<=i;k++){
//         str += "8 ";
//       }
//       console.log(str);
//     }
//   }
  
//   console.log(TriangleWithOne(10))