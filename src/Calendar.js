class Calendar {
    //return : Senin, 20 april 2020
    full_long_date(call, time = false) {

        let date = new Date(call);
        let arr_data = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        let hari = arr_data[date.getDay()];
        let tgl = this.long_date(call, time)
        return `${hari}, ${tgl}`;
    }

    // return 20 april 2020
    long_date(call, time = false)
    {
        let date = new Date(call);
        let arr_month = [
            'januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'
        ];
        let times = '';
        if (time) {
            times = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        }
        return `${date.getDate()} ${arr_month[date.getMonth()]} ${date.getFullYear()} ${times}`;
    }
}