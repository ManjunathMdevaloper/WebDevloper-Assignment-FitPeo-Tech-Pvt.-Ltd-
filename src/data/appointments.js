const calendarAppointments = {
    days: [
      { date: 'Mon 4', times: ['09:00', '11:00', '--'] },
      { date: 'Tue 5', times: ['13:00', '--', '--'], },
      { date: 'Wed 6', times: ['10:00', '14:30', '18:00'] },
      { date: 'Thu 7', times: ['15:00','--','--'] },
      { date: 'Fri 8', times: ['--','--','--'] },
      { date: 'Sat 9', times: ['10:00','--','--'] },
      { date: 'Sun 10', times: ['--','--','--'] },
    ],
    appointmentDetails: [
      { title: 'Dentist🦷', time: 'Thu 7 @ 15:00', dr:'Dr.Cameron Williamson' },
      { title: 'Physiotherapy 💪', time: 'Sat 9 @ 10:00', dr:'Dr.Kevin Djones' },
    ],
  };
const upcoming = [
    {
      day: 'Thursday',
      items: [
        { title: 'Health checkup complete 🩺', time: '11:00 AM' },
        { title: 'Ophthalmologist 👁️', time: '02:00 PM' }
      ]
    },
    {
      day: 'Saturday',
      items: [
        { title: 'Cardiologist ❤️', time: '12:00 AM' },
        { title: 'Neurologist 🧠', time: '04:00 PM' }
      ]
    }
  ];
  
  export {upcoming};
  export default calendarAppointments;