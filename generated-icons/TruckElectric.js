import {tags} from 'ziko';
const {svg} = tags;
const TruckElectric = (props) => 
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
    tags.path({"d":"M14 19V7a2 2 0 0 0-2-2H9"}),
	tags.path({"d":"M15 19H9"}),
	tags.path({"d":"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"}),
	tags.path({"d":"M2 13v5a1 1 0 0 0 1 1h2"}),
	tags.path({"d":"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"}),
	tags.circle({"cx":"17","cy":"19","r":"2"}),
	tags.circle({"cx":"7","cy":"19","r":"2"})
    )
export default TruckElectric;
