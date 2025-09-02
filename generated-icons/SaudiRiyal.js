import {tags} from 'ziko';
const {svg} = tags;
const SaudiRiyal = (props) => 
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
    tags.path({"d":"m20 19.5-5.5 1.2"}),
	tags.path({"d":"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"}),
	tags.path({"d":"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"}),
	tags.path({"d":"M20 10 4 13.5"})
    )
export default SaudiRiyal;
