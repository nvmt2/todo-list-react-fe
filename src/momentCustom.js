import moment from 'moment';

moment.locale('vi', {
  // months:
  //   'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
  //     '_'
  //   ),
  // monthsShort:
  //   'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  // monthsParseExact: true,
  // weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  // weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  // weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  // weekdaysParseExact: true,
  // longDateFormat: {
  //   LT: 'HH:mm',
  //   LTS: 'HH:mm:ss',
  //   L: 'DD/MM/YYYY',
  //   LL: 'D MMMM YYYY',
  //   LLL: 'D MMMM YYYY HH:mm',
  //   LLLL: 'dddd D MMMM YYYY HH:mm',
  // },
  // calendar: {
  //   sameDay: '[Aujourd’hui à] LT',
  //   nextDay: '[Demain à] LT',
  //   nextWeek: 'dddd [à] LT',
  //   lastDay: '[Hier à] LT',
  //   lastWeek: 'dddd [dernier à] LT',
  //   sameElse: 'L',
  // },
  relativeTime: {
    future: 'còn %s',
    past: 'quá %s',
    s: 'vài giây',
    m: 'một phút',
    mm: '%d phút',
    h: 'một giờ',
    hh: '%d giờ',
    d: 'một ngày',
    dd: '%d ngày',
    M: 'một tháng',
    MM: '%d tháng',
    y: 'một năm',
    yy: '%d năm',
  },
  // dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  // ordinal: function (number) {
  //   return number + (number === 1 ? 'er' : 'e');
  // },
  // meridiemParse: /PD|MD/,
  // isPM: function (input) {
  //   return input.charAt(0) === 'M';
  // },
  // // In case the meridiem units are not separated around 12, then implement
  // // this function (look at locale/id.js for an example).
  // // meridiemHour : function (hour, meridiem) {
  // //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // // },
  // meridiem: function (hours, minutes, isLower) {
  //   return hours < 12 ? 'PD' : 'MD';
  // },
  // week: {
  //   dow: 1, // Monday is the first day of the week.
  //   doy: 4, // Used to determine first week of the year.
  // },
});

export { moment };
