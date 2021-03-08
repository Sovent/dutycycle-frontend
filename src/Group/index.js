import { useParams } from "react-router-dom"

export default function Group() {
  const { groupId } = useParams();

  return (<div>Group with id {groupId}</div>);
};