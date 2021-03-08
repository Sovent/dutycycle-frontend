import { useState, useEffect } from 'react';
import { useAuthContext } from '../Auth';
import { getGroups } from '../api';
import GroupsListPresenter from './GroupsListPresenter';
import { useHistory } from 'react-router-dom';

export default function GroupsList() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const updateGroups = async () => {
      const groupsFromApi = await getGroups();
      setGroups(groupsFromApi);
    }

    updateGroups();
  }, []);
  const {organization} = useAuthContext();
  const history = useHistory();
  const onGroupClick = (id) => {
    history.push("/groups/" + id);
  };

  const props = { organization, groups, onGroupClick };
  return (<GroupsListPresenter {...props}></GroupsListPresenter>)
}