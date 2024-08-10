const timeZones = [
    { value: 'UTC', text: 'UTC' },
    { value: 'America/New_York', text: 'New York (EST/EDT)' },
    { value: 'Europe/London', text: 'London (GMT/BST)' },
    { value: 'Asia/Tokyo', text: 'Tokyo (JST)' },
    { value: 'Australia/Sydney', text: 'Sydney (AEST/AEDT)' },
    // Add more time zones as needed
];

window.onload = function() {
    const fromZoneSelect = document.getElementById('from-zone');
    const toZoneSelect = document.getElementById('to-zone');

    timeZones.forEach(zone => {
        const optionFrom = document.createElement('option');
        optionFrom.value = zone.value;
        optionFrom.text = zone.text;
        fromZoneSelect.add(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = zone.value;
        optionTo.text = zone.text;
        toZoneSelect.add(optionTo);
    });
}

function convertTime() {
    const fromTime = document.getElementById('from-time').value;
    const fromZone = document.getElementById('from-zone').value;
    const toZone = document.getElementById('to-zone').value;

    if (!fromTime) {
        alert("Please enter the time to convert.");
        return;
    }

    const fromDate = new Date(fromTime);
    const utcDate = fromDate.toLocaleString('en-US', { timeZone: 'UTC' });
    const toDate = new Date(utcDate).toLocaleString('en-US', { timeZone: toZone });

    document.getElementById('converted-time').innerText = toDate;
}
