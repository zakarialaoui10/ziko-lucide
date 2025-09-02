import {tags} from 'ziko';
const {svg} = tags;
const SatelliteDish = (props) => 
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
    tags.path({"d":"M4 10a7.31 7.31 0 0 0 10 10Z"}),
	tags.path({"d":"m9 15 3-3"}),
	tags.path({"d":"M17 13a6 6 0 0 0-6-6"}),
	tags.path({"d":"M21 13A10 10 0 0 0 11 3"})
    )
export default SatelliteDish;
