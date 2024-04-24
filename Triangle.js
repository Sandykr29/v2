// // triangle...

// function TriangleWtihOne(n){
//     for(let i=0;i<n;i++){
//       let str = "";
//       for(let j=0;j<n-i;j++){
//         str += " ";
//       }
//       for(let k=0;k<=i;k++){
//         str += "1 ";
//       }
//       console.log(str);
//     }
//   }
  
//   console.log(TriangleWtihOne(10))

// // left triangle

// function LeftTriangleWithOne(n){
//     for(let i=1; i<=n; i++){
//       let str = "";
//       for(let j=1; j<=i; j++){
//         str += "1";
//       }
//       console.log(str);
//     }
//   }
//   console.log(LeftTriangleWithOne(5));

//   // Square

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
  
// //   Hollow Squre
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
  