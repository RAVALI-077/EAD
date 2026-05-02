const fs=require('fs');
const EmpData ="Name:Ravali\nRollno:77\nSalary:50000";
fs.writeFile('data.txt',EmpData,(err)=>{
    if(err) throw err;
    console.log('file created successfully');

fs.readFile('data.txt','utf8',(err,data) =>{
    if(err) throw err;
    console.log('file is red');
    console.log(data);
    const newData ="Grade: A\n";
    fs.appendFile('data.txt',newData,(err)=>{
        if(err) throw err;
        console.log('file appended sucessfully');
        fs.readFile('data.txt','utf8',(err,update)=>{
            if(err) throw err;
            console.log(update);
            fs.unlink('data.txt',(err)=>{
                if (err) throw err;
                console.log('deleted');
            });
        });
    });
});
});
