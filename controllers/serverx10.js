var cmd = require('node-cmd');
// var module = "rf l4 on"
// var command = "echo " + module + " | nc 192.168.1.18 1099"; 

function x10cmd(module)
{
    var command = "echo " + module + " | nc 192.168.1.18 1099";
    console.log(command); 
    cmd.run(command);
};
x10cmd("rf l4 off");

// cmd.run(`echo "rf l4 on  " + " | nc 192.168.1.18 1099');
// cmd.run(
// module + " on" | nc 192.168.1.18 1099`);