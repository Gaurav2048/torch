import { useEffect } from "react";
import useAxios from "./useAxios";
import { useRecoilState } from "recoil";
import { memberAtom, orgAtom, profileAtom } from "../AppState/state";
import { ROUTES } from "../Constants";

const useInitials = () => {
  const orgId = "66beb38e168efaf09cb836bd"; // Need to change to local storage later
  const [org, setOrg] = useRecoilState(orgAtom);
  const [members, setMembers] = useRecoilState(memberAtom);
  const [ profile, setProfile ] = useRecoilState(profileAtom)
  const { loading, fetchData, response } = useAxios({
    method: "GET",
    url: `/org/${orgId}`,
  });

  const {
    loading: loadingMembers,
    fetchData: fetchMembers,
    response: responseMembers,
  } = useAxios({
    method: "GET",
    url: ROUTES.FETCH_MEMBER(orgId),
  });

  const {
    loading: loadingProfile,
    fetchData: fetchProfile,
    response: responseProfile,
  } = useAxios({
    method: "POST",
    url: ROUTES.FETCH_PROFILE(),
  });

  useEffect(() => {
    fetchData();
    fetchMembers();
    fetchProfile();
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

  useEffect(() => {
    if (!!responseProfile) {
      setProfile(responseProfile);
    }
  }, [responseProfile]);

  return loading && loadingMembers && loadingProfile;
};

export default useInitials;
