import {tags} from 'ziko';
const {svg} = tags;
const TrafficCone = (props) => 
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
    tags.path({"d":"M16.05 10.966a5 2.5 0 0 1-8.1 0"}),
	tags.path({"d":"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"}),
	tags.path({"d":"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"}),
	tags.path({"d":"M9.194 6.57a5 2.5 0 0 0 5.61 0"})
    )
export default TrafficCone;
