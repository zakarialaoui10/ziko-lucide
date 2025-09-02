import {tags} from 'ziko';
const {svg} = tags;
const LandPlot = (props) => 
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
    tags.path({"d":"m12 8 6-3-6-3v10"}),
	tags.path({"d":"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}),
	tags.path({"d":"m6.49 12.85 11.02 6.3"}),
	tags.path({"d":"M17.51 12.85 6.5 19.15"})
    )
export default LandPlot;
