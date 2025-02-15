import { useState } from 'react'
import './App.css'
import "../src/table.css"

const campaignData = [
  { "campaign": "Shampoo Basic", "clicks": 723, "cost": 332, "conversions": 1, "revenue": 32 },
  { "campaign": "Serums Advanced", "clicks": 719, "cost": 5325, "conversions": 2, "revenue": 3423 },
  { "campaign": "Cosmetics Premium", "clicks": 712, "cost": 838, "conversions": 3, "revenue": 34344 },
  { "campaign": "Facewash Regular", "clicks": 711, "cost": 9993, "conversions": 5, "revenue": 4323 },
  { "campaign": "Facewash Plus", "clicks": 253, "cost": 3435, "conversions": 5, "revenue": 23434 },
  { "campaign": "Cosmetics Basic", "clicks": 713, "cost": 998, "conversions": 8, "revenue": 16568 },
  { "campaign": "Hair Oil Treatment", "clicks": 892, "cost": 2456, "conversions": 12, "revenue": 8901 },
  { "campaign": "Anti-Aging Cream", "clicks": 654, "cost": 1876, "conversions": 7, "revenue": 5432 },
  { "campaign": "Sunscreen SPF50", "clicks": 789, "cost": 3210, "conversions": 15, "revenue": 12789 },
  { "campaign": "Body Lotion", "clicks": 567, "cost": 1234, "conversions": 4, "revenue": 3456 },
  { "campaign": "Eye Cream", "clicks": 432, "cost": 2345, "conversions": 6, "revenue": 7890 },
  { "campaign": "Lip Care", "clicks": 345, "cost": 987, "conversions": 3, "revenue": 2345 },
  { "campaign": "Hand Cream", "clicks": 678, "cost": 1543, "conversions": 9, "revenue": 6789 },
  { "campaign": "Foot Cream", "clicks": 234, "cost": 876, "conversions": 2, "revenue": 1543 },
  { "campaign": "Body Scrub", "clicks": 567, "cost": 2134, "conversions": 8, "revenue": 5678 },
  { "campaign": "Face Mask", "clicks": 890, "cost": 3456, "conversions": 11, "revenue": 9012 },
  { "campaign": "Toner Basic", "clicks": 345, "cost": 1234, "conversions": 4, "revenue": 3456 },
  { "campaign": "Moisturizer Plus", "clicks": 678, "cost": 2345, "conversions": 7, "revenue": 6789 },
  { "campaign": "Night Cream", "clicks": 432, "cost": 1876, "conversions": 5, "revenue": 4321 },
  { "campaign": "Acne Treatment", "clicks": 567, "cost": 2987, "conversions": 9, "revenue": 7654 },
  { "campaign": "Hair Mask", "clicks": 789, "cost": 3210, "conversions": 13, "revenue": 10987 },
  { "campaign": "Hair Serum", "clicks": 456, "cost": 1765, "conversions": 6, "revenue": 5432 },
  { "campaign": "Body Wash", "clicks": 678, "cost": 2345, "conversions": 8, "revenue": 7654 },
  { "campaign": "Face Serum", "clicks": 890, "cost": 4321, "conversions": 14, "revenue": 12345 },
  { "campaign": "Eye Serum", "clicks": 345, "cost": 1654, "conversions": 5, "revenue": 4321 },
  { "campaign": "Lip Balm", "clicks": 567, "cost": 987, "conversions": 3, "revenue": 2345 },
  { "campaign": "Hand Sanitizer", "clicks": 789, "cost": 1543, "conversions": 7, "revenue": 6543 },
  { "campaign": "Foot Scrub", "clicks": 234, "cost": 876, "conversions": 2, "revenue": 1765 },
  { "campaign": "Body Oil", "clicks": 567, "cost": 2134, "conversions": 8, "revenue": 6543 },
  { "campaign": "Face Oil", "clicks": 890, "cost": 3456, "conversions": 12, "revenue": 10987 },
  { "campaign": "Hair Color", "clicks": 456, "cost": 2345, "conversions": 6, "revenue": 5678 },
  { "campaign": "Shampoo Plus", "clicks": 678, "cost": 1987, "conversions": 9, "revenue": 8765 },
  { "campaign": "Conditioner Basic", "clicks": 890, "cost": 3210, "conversions": 11, "revenue": 9876 },
]

function App() {
  const [data,setData]=useState(campaignData);
  const [asc,setAsc]=useState(true)

  function SortingTable(){
    for (let i in data){
      if(typeof(i)==String){

      }
      else{
        i.sort((a,b)=>a.value-b.value)
      }
    }
  }

  return (
    <>
<table>
  <thead>
    <tr>
      <th >campaign <button onClick={SortingTable}>(↑)</button> <button onClick={SortingTable}>(↓)</button> </th>
      <th >clicks <button onClick={SortingTable}>(↑)</button> <button onClick={SortingTable}>(↓)</button></th>
      <th >cost <button onClick={SortingTable}>(↑)</button> <button onClick={SortingTable}>(↓)</button></th>
      <th>conversions <button onClick={SortingTable}>(↑)</button> <button onClick={SortingTable}>(↓)</button></th>
      <th>revenue <button onClick={SortingTable}>(↑)</button> <button onClick={SortingTable}>(↓)</button></th>
    </tr>
  </thead>
  <tbody>
          {data.map((item, ind) => ( 
            <tr key={ind}>
              <td>{item.campaign}</td>
              <td>{item.clicks}</td>
              <td>{item.cost}</td>
              <td>{item.conversions}</td>
              <td>{item.revenue}</td>
            </tr>
          ))}
        </tbody>
</table>
    </>
  )
}

export default App


// data.sort((a,b)=>a.value-b.value)
// data.sort((a,b)=>b.value-a.value)