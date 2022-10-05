import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {HOME_ACT_ADD_REPOS} from "../redux/action";
import { ListHomeDashboard } from "./homeListDashboard";

export default function HomeItem() {
    const dispatch = useDispatch();
    const [pages, setPages] = useState({
        page: 1,
        per_page: 5,
    })
    const { home } = useSelector(state => state)
    const { listRepos } = home;

    const sendDispatch = useCallback((type, payload) => {
        type === 'LOAD_PAGE' && dispatch({type: HOME_ACT_ADD_REPOS, payload})
    }, [dispatch]);


    useEffect(() => {
        sendDispatch('LOAD_PAGE', pages);
        return () => {
            //willMount
        };
    }, [])
    const loadingData = () => {
        return (
            <div>
                <h1 className={styles.title}>
                    Content Loading
                </h1>
            </div>
        )
    }
    return (
        <div>
            {listRepos !== undefined ?
                <ListHomeDashboard
                    listRows={listRepos}
                /> : loadingData()
            }
        </div>
    )
}
