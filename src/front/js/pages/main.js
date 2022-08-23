import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Main = () => {
    const { store, actions } = useContext(Context);
    const token = sessionStorage.getItem("token");

    return (
        <div className="gradient-custom-3">
            <div id="login">

                <div className="container vh-100">
                    <div class="jumbotron">
                        <h1 class="display-4">ZONA PUBLICA</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p class="lead">
                            {/* <a class="btn btn-primary btn-lg" href="#" role="button">Atrás</a> */}
                        </p>
                    </div>
                    <div class="jumbotron">
                        <h1 class="display-4">ZONA PUBLICA 2</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p class="lead">
                            {/* <a class="btn btn-primary btn-lg" href="#" role="button">Atrás</a> */}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
