import {tags} from 'ziko';
const {svg} = tags;
const RailSymbol = (props) => 
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
    tags.path({"d":"M5 15h14"}),
	tags.path({"d":"M5 9h14"}),
	tags.path({"d":"m14 20-5-5 6-6-5-5"})
    )
export default RailSymbol;
