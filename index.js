// Code your solution here
function findMatching (drivers, driverName) {
    let selectedDrivers = drivers.filter(function(drivers) {return drivers === driverName || drivers == driverName.toLowerCase();});
    return selectedDrivers;
}

function fuzzyMatch (drivers, driverName) {
    let selectedDrivers = drivers.filter(function(drivers) {return drivers.startsWith(driverName);});
    return selectedDrivers;
}

function matchName (drivers, property) {
    let selectedDrivers = drivers.filter(function(drivers) {return drivers.name === property;})
    return selectedDrivers;
}