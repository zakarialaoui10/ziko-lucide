import {tags} from 'ziko';
const {svg} = tags;
const BluetoothOff = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"m17 17-5 5V12l-5 5"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M14.5 9.5 17 7l-5-5v4.5"})
    )
export default BluetoothOff;
