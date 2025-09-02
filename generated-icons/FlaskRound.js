import {tags} from 'ziko';
const {svg} = tags;
const FlaskRound = (props) => 
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
    tags.path({"d":"M10 2v6.292a7 7 0 1 0 4 0V2"}),
	tags.path({"d":"M5 15h14"}),
	tags.path({"d":"M8.5 2h7"})
    )
export default FlaskRound;
