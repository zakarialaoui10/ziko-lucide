import {tags} from 'ziko';
const {svg} = tags;
const BellPlus = (props) => 
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
    tags.path({"d":"M10.268 21a2 2 0 0 0 3.464 0"}),
	tags.path({"d":"M15 8h6"}),
	tags.path({"d":"M18 5v6"}),
	tags.path({"d":"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"})
    )
export default BellPlus;
