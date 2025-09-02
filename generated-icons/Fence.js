import {tags} from 'ziko';
const {svg} = tags;
const Fence = (props) => 
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
    tags.path({"d":"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}),
	tags.path({"d":"M6 8h4"}),
	tags.path({"d":"M6 18h4"}),
	tags.path({"d":"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}),
	tags.path({"d":"M14 8h4"}),
	tags.path({"d":"M14 18h4"}),
	tags.path({"d":"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"})
    )
export default Fence;
