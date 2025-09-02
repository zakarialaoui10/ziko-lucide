import {tags} from 'ziko';
const {svg} = tags;
const Dribbble = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.path({"d":"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}),
	tags.path({"d":"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}),
	tags.path({"d":"M8.56 2.75c4.37 6 6 9.42 8 17.72"})
    )
export default Dribbble;
