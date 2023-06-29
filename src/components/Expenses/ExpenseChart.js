import Chart from "../Chart/Chart";

const ExpenseChart = props =>{
    const dataPointValues = [
        {value:0,label:'jan'},
        {value:0,label:'feb'},
        {value:0,label:'mar'},
        {value:0,label:'apr'},
        {value:0,label:'may'},
        {value:0,label:'jun'},
        {value:0,label:'jul'},
        {value:0,label:'aug'},
        {value:0,label:'sep'},
        {value:0,label:'oct'},
        {value:0,label:'nov'},
        {value:0,label:'dec'}
    ];

    for(let expense of props.expense){
        const expenseMonth = expense.date.getMonth();
        dataPointValues[expenseMonth].value+= expense.amount;
    }
    //console.log(dataPointValues);

    return <Chart dataPoints={dataPointValues}/>

}


export default ExpenseChart;