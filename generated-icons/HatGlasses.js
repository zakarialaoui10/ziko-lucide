import {tags} from 'ziko';
const {svg} = tags;
const HatGlasses = (props) => 
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
    tags.path({"d":"M14 18a2 2 0 0 0-4 0"}),
	tags.path({"d":"m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"}),
	tags.path({"d":"M2 11h20"}),
	tags.circle({"cx":"17","cy":"18","r":"3"}),
	tags.circle({"cx":"7","cy":"18","r":"3"})
    )
export default HatGlasses;
