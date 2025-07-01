import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '@supabase/supabase-js';
import { createClient } from "@supabase/supabase-js";
import { supabaseApiKey } from 'src/environments/environments';

const supabase = createClient('https://toadqdstdkrpfrjldpid.supabase.co', supabaseApiKey.value);

@Injectable({ providedIn: 'root' })

export class AuthService {
    private sessionSubject = new BehaviorSubject<Session | null>(null);
    public session$: Observable<Session | null> = this.sessionSubject.asObservable();

    constructor() {
        supabase.auth.getSession().then(({ data: { session } }) => {
            this.sessionSubject.next(session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            this.sessionSubject.next(session);
        });
    }

    async signOut() {
        await supabase.auth.signOut();
    }

    async signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        return { data, error };
    }

    async signUp(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        return { data, error };
    }

    async signInGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        return { data, error };
    }

    async signInGitHub() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        });
        return { data, error };
    }
}

// Remova o export dos hooks antigos, pois agora tudo está no AuthService