import {tags} from 'ziko';
const {svg} = tags;
const WavesLadder = (props) => 
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
    tags.path({"d":"M19 5a2 2 0 0 0-2 2v11"}),
	tags.path({"d":"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}),
	tags.path({"d":"M7 13h10"}),
	tags.path({"d":"M7 9h10"}),
	tags.path({"d":"M9 5a2 2 0 0 0-2 2v11"})
    )
export default WavesLadder;
