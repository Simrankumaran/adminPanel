import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import axios from "axios";

const Chart1 = () => {
  const [money, setMoney] = useState({
    earnings: [],
  });
  useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(
        "http://localhost:8000/analytics/stats/hospital/earning/" + 1,
        headers
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("Earning chart data");
          console.log(res.data);
          // setDocdata(res.data);
          setMoney({ earnings: res.data });
          // for (var i in res.data) {
          //   setDocdata({
          //     name: res.data.name,
          //     value: res.data.value,
          //   });
          // }
        }
      })
      .catch();
  }, []);
  return (
    <div>
      <BarChart width={1000} height={400} data={money.earnings}>
        <XAxis dataKey="date" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="amount" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

// const Chart3 = () => {
//   const classes = useStyles();
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
//   const rows = [
//     createData("1800", "Medication", 24, 159),
//     createData("1801", "Procedure", 37, 237),
//     createData("1802", "Blood Test", 24, 262),
//     createData("1803", "Consultation", 67, 305),
//     createData("1804", "Medication", 49, 356),
//   ];
//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>PatientID</TableCell>
//             <TableCell align="right">Description</TableCell>
//             <TableCell align="right">Unit Price</TableCell>
//             <TableCell align="right">Amount</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

export { Chart1 };
