import {tags} from 'ziko';
const {svg} = tags;
const Nfc = (props) => 
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
    tags.path({"d":"M6 8.32a7.43 7.43 0 0 1 0 7.36"}),
	tags.path({"d":"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}),
	tags.path({"d":"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}),
	tags.path({"d":"M16.37 2a20.16 20.16 0 0 1 0 20"})
    )
export default Nfc;
