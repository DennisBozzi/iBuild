import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session, AuthChangeEvent } from '@supabase/supabase-js';
import { createClient } from "@supabase/supabase-js";
import { supabaseApiKey } from 'src/environments/environments';

const supabase = createClient('https://43.supabase.co', supabaseApiKey.value);

@Injectable({ providedIn: 'root' })

export class AuthService implements OnDestroy {
    private sessionSubject = new BehaviorSubject<Session | null>(null);
    public session$: Observable<Session | null> = this.sessionSubject.asObservable();
    private authSubscription: any;

    constructor() {
        this.initializeAuth();
    }

    private async initializeAuth() {
        try {
            const { data: { session }, error } = await supabase.auth.getSession();

            this.sessionSubject.next(session);
            const { data: { subscription } } = supabase.auth.onAuthStateChange(
                (event: AuthChangeEvent, session: Session | null) => {
                    this.sessionSubject.next(session);
                }
            );
            this.authSubscription = subscription;
        } catch (error) {
            this.sessionSubject.next(null);
        }
    }

    ngOnDestroy() {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
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

    async getUserProfile() {
        const { data, error } = await supabase.auth.getUser();
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