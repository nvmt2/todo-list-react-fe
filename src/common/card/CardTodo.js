import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
//internal modules
import { actionOpenDialogEditTask } from 'common/dialog/redux/action';
import { actionRemoveTask } from 'module/page/main/redux/action';
import { actionUpdateTask } from 'module/page/main/redux/action';
//material-ui component
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//internal modules
import { styleCard } from 'common/card/style';

// Firebase
import { doc, updateDoc } from 'firebase/firestore';
import { db, DATABASE_NAME } from 'firebase';

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

function CardTodo(props) {
  //STATE
  let {
    title,
    description,
    completed,
    updatedAt,
    createdAt,
    _id,
    isDisplayRemoveButton,
    isDisplayEditButton,
    isDisplayDoneDraftButton,
  } = props;
  const classes = styleCard();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  let timeToFromNow = moment(createdAt).fromNow();

  //METHOD
  const handleRemoveTask = () => {
    dispatch(actionRemoveTask(_id, token));
  };

  const handleSaveDraft = () => {
    let taskUpdate = {
      description: description + ' - done',
    };

    dispatch(actionUpdateTask(_id, taskUpdate, token));
  };

  const handleEditTask = () => {
    let payload = {
      _id,
      description,
      title,
    };
    dispatch(actionOpenDialogEditTask(payload));
  };

  const handleRemoveTodo = async () => {
    await updateDoc(doc(db, DATABASE_NAME.TASKS, _id), {
      removed: true,
    });
  };

  const handleEditTodo = async (payload) => {
    await updateDoc(doc(db, DATABASE_NAME.TASKS, _id), {
      completed: true,
    });
  };

  //LIFECYCLE
  return (
    <Card className={classes.parentCard} variant="outlined">
      <CardContent>
        {/* <Typography variant="h5" component="h2">
          {title}
        </Typography> */}
        <Typography variant="h5" component="p">
          {description}
        </Typography>
        <Typography className={classes.time} variant="subtitle2" component="p">
          {timeToFromNow}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">View detail</Button> */}
        {isDisplayRemoveButton && (
          <Button variant="outlined" size="small" onClick={handleRemoveTodo}>
            XÓA
          </Button>
        )}

        {isDisplayDoneDraftButton && (
          <Button variant="outlined" size="small" onClick={handleEditTodo}>
            XONG
          </Button>
        )}

        {isDisplayEditButton && (
          <Button variant="outlined" size="small" onClick={handleEditTask}>
            SỬA
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default CardTodo;
