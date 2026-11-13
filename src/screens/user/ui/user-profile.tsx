"use client";
import {
  Pencil,
  Save,
} from "lucide-react";
import { useState } from "react";

import { EditUserProfile } from "@/features/edit-user-profile";
import {
  UserProfileDetails,
  UserProfileDocument,
  UserProfileDocumentFooter,
} from "@/entities/user";
import { Button } from "@/shared/components";

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-slate-50 min-h-screen text-slate-800">
      <UserProfileDetails />
      <EditUserProfile isEditing={isEditing} setIsEditing={setIsEditing} />
      <UserProfileDocument />
      <UserProfileDocumentFooter />

      <div className="flex justify-end pt-2">
        {isEditing ? (
          <Button
            type="submit"
            className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => setIsEditing(false)}
          >
            <Save className="w-4 h-4" />
            Сохранить
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => setIsEditing(true)}
            className="gap-2 bg-slate-900 hover:bg-slate-800 text-white"
          >
            <Pencil className="w-4 h-4" />
            Редактировать
          </Button>
        )}
      </div>
    </div>
  );
};
