import { useEffect } from "react";
import useAxios from "./useAxios";
import { useRecoilState } from "recoil";
import { memberAtom, orgAtom } from "../AppState/state";
import { ROUTES } from "../Constants";

const useInitials = () => {
  const orgId = "66beb38e168efaf09cb836bd"; // Need to change to local storage later
  const [org, setOrg] = useRecoilState(orgAtom);
  const [members, setMembers] = useRecoilState(memberAtom);
  const { loading, fetchData, response } = useAxios({
    method: "GET",
    url: `/org/${orgId}`,
  });

  const {
    loading: ladingMembers,
    fetchData: fetchMembers,
    response: responseMembers,
  } = useAxios({
    method: "GET",
    url: ROUTES.FETCH_MEMBER(orgId),
  });

  useEffect(() => {
    fetchData();
    fetchMembers();
  }, []);

  useEffect(() => {
    if (!!response) {
      setOrg(response);
    }
  }, [response]);

  useEffect(() => {
    if (!!responseMembers) {
      setMembers(responseMembers);
    }
  }, [responseMembers]);

  return loading && ladingMembers;
};

export default useInitials;
