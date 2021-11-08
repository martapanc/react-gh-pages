import { useEffect } from 'react';

const useScript = (url: string, id?: string) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        if (id) {
            script.id = id;
        }

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;